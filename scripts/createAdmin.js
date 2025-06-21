
import { User, Especialidad } from '../src/utils/sequelize'

export const createRecords = async () => {
    const usuarioData =
    {
        "name": "Daniel",
        "email": "admin@admin.com",
        "nacionalidad": "Venezuela",
        "dni": 123456789,
        "telefono": 1234567890,
        "direccion": "Calle Principal 123",
        "password": "123456",
        "hash": "abcdef123456",
        "profileImage": "profile.jpg",
        "role": "user"
      }
    try {
      // const rol = await Rol.create({ role: 'admin' }, { raw: true});
      const especialidad = await Especialidad.create({ roleEspecialidad: 'Enfermeria' });
      const usuario = await User.create({
        ...usuarioData,
        EspecialidadId: especialidad.toJSON().id, 
      });
    } catch (error) {
      console.error('Error al crear los registros:', error);
    }
  };
  
  createRecords();