export default {
  name: 'Formulario',
  // props: {},
  // emits: [],
  data() {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      usuarios: []
    };
  },
  computed: {
    // propiedades derivadas
    errorNombre() {
        let mensaje = ''
        if(!this.formData.nombre) mensaje = 'Campo requerido'
        else if(this.formData.nombre.length < 5) mensaje = 'Este campo debe poseer al menos 5 caracteres'
        else if(this.formData.nombre.length > 15) mensaje = 'Este campo debe poseer como máximo 15 caracteres'
        else if(this.formData.nombre.includes(' ')) mensaje = 'Este campo no permite espacios intermedios'

        return {
            mensaje: mensaje,
            mostrar: mensaje != '' && this.formDirty.nombre,
            ok: mensaje == ''
        }
    },
    errorEmail() {
        let mensaje = ''
        if(!this.formData.email) mensaje = 'Campo requerido'
        else if(!this.validarEmail(this.formData.email)) mensaje = 'Debe ingresar un email válido'

        return {
            mensaje: mensaje,
            mostrar: mensaje != '' && this.formDirty.email,
            ok: mensaje == ''
        }
    },
    errorEdad() {
        let mensaje = ''
        if(!this.formData.edad) mensaje = 'Campo requerido'
        else if(this.formData.edad < 18) mensaje = 'Debe ingresar una edad mayor a 18'
        else if(this.formData.edad > 120) mensaje = 'La edad máxima permitida es 120'

        return {
            mensaje: mensaje,
            mostrar: mensaje != '' && this.formDirty.edad,
            ok: mensaje == ''
        }
    }        
  },
  watch: {
    // observadores
  },
  methods: {
    // métodos del componente
    getInicialData() {
        return {
            nombre: null,
            edad: null,
            email: null
        }
    },
    validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    },
    botonEnvioDeshabilitado() {
        return !this.errorNombre.ok || !this.errorEdad.ok || !this.errorEmail.ok
    },
    enviar() {
        const datos = {...this.formData}
        this.usuarios.push(datos)
        this.formData = this.getInicialData()
        this.formDirty = this.getInicialData()
    }
  },
  // mounted() {},
  // unmounted() {},
};
