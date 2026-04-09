import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

const JSON = new GraphQLScalarType({
  name: 'JSON',
  description: 'The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
  serialize(value) {
    return value;
  },
  parseValue(value) {
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.OBJECT) {
      const value = {};
      ast.fields.forEach(field => {
        value[field.name.value] = this.parseLiteral(field.value);
      });
      return value;
    }
    return null;
  }
});

export { JSON };
