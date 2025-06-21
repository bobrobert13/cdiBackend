
import { User, Especialidad, Estado } from '../src/utils/sequelize'

export const populateEspecialidad = async () => {
    const especialidades = [{
        roleEspecialidad: 'Enfermeria'
    },
    {
        roleEspecialidad: 'Oftalmologia'
    },
    {
        roleEspecialidad: 'Rayosx'
    },
    {
        roleEspecialidad: 'Hospitalizacion'
    },
    {
        roleEspecialidad: 'Emergencias'
    },
    {
        roleEspecialidad: 'Laboratorio'
    },
    {
        roleEspecialidad: 'Recepcion'
    },
    {
        roleEspecialidad: 'TerapiasIntensivas'
    },
    {
        roleEspecialidad: 'Farmacia'
    }

]
    const make = await Especialidad.bulkCreate(especialidades);
    console.log("especialidades creadas", make)
}

export const populateEstados = async () => {
  const estados = [
        { nombre: 'Amazonas'},
        { nombre: 'Anzoátegui'},
        { nombre: 'Apure'},
        { nombre: 'Aragua'},
        { nombre: 'Barinas'},
        { nombre: 'Bolívar'},
        { nombre: 'Carabobo'},
        { nombre: 'Cojedes'},
        { nombre: 'Delta Amacuro'},
        { nombre: 'Falcón' },
        { nombre: 'Guárico' },
        { nombre: 'Lara' },
        { nombre: 'Mérida' },
        { nombre: 'Miranda' },
        { nombre: 'Monagas' },
        { nombre: 'Nueva Esparta' },
        { nombre: 'Portuguesa' },
        { nombre: 'Sucre' },
        { nombre: 'Táchira' },
        { nombre: 'Trujillo' },
        { nombre: 'Vargas' },
        { nombre: 'Yaracuy' },
        { nombre: 'Zulia' },
        { nombre: 'Distrito Capital' },
        { nombre: 'Dependencias Federales' }
        ];
    const make = await Estado.bulkCreate(estados);
    console.log("estados creados", make)
}

export const populateUsers = async () => {
    const usuarioData = [
        {
            "name": "Daniel",
            "email": "admin@admin.com",
            "nacionalidad": "Venezuela",
            "dni": 123456789,
            "telefono": 1234567890,
            "direccion": "",
            "password": "$2a$13$GFCAeg/udm5dZbhgzVbcL.7.nQdNh8JPIOfkfGWijx.ZeEM7bd3x.",
            "hash": "abcdef123456",
            "profileImage": "profile.jpg",
            "role": "admin",
            "AreaId": 1
          },
    ]
    try {
        const make =   await User.bulkCreate(usuarioData);
    console.log("especialidades creadas", make)

    } catch (error) {
      console.error('Error al crear los registros:', error);
    }
  };