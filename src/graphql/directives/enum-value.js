import { SchemaDirectiveVisitor } from 'apollo-server-express';

/**
 * Directiva personalizada para mapear valores de enums GraphQL a valores legibles
 * Uso en schema: enum TipoDeExamen @enumValue(map: { ORINA: "Orina" }) { ORINA }
 * 
 * Transforma:
 * - Entrada: "Orina" -> ORINA (para mutations)
 * - Salida: ORINA -> "Orina" (para queries)
 */
class EnumValueDirective extends SchemaDirectiveVisitor {
  visitEnum(enumType) {
    const { map } = this.args;
    
    if (!map) return enumType;
    
    // Crear mapeo inverso: valor legible -> valor interno
    const reverseMap = Object.fromEntries(
      Object.entries(map).map(([k, v]) => [v, k])
    );
    
    // Guardar ambos mapas en el tipo
    enumType._enumDisplayMap = map;
    enumType._enumInternalMap = reverseMap;
    
    // Override serialize para transformar valores de salida (query)
    const originalSerialize = enumType.serialize.bind(enumType);
    enumType.serialize = (value) => {
      const internalValue = originalSerialize(value);
      // Si hay un mapeo para este valor interno, retornar el valor legible
      if (enumType._enumDisplayMap[internalValue]) {
        return enumType._enumDisplayMap[internalValue];
      }
      return internalValue;
    };
    
    // Override parseValue para transformar valores de entrada (mutation)
    const originalParseValue = enumType.parseValue.bind(enumType);
    enumType.parseValue = (value) => {
      // Si el valor es un valor legible, convertirlo al valor interno
      if (enumType._enumInternalMap[value]) {
        return originalParseValue(enumType._enumInternalMap[value]);
      }
      return originalParseValue(value);
    };
    
    return enumType;
  }
}

export { EnumValueDirective };
