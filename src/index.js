System.config({
	baseURL: '/src',
	packages: {        
      app: {
        format: 'register',
        defaultExtension: 'js'
      },
      components:{
      	format: 'register',
      	defaultExtension: 'js'
      },
      service:{
      	format: 'register',
      	defaultExtension: 'js'
      }
    }
});
System.import('./bootstrap.js')
	.then(null, console.error.bind(console));