System.config({
	baseURL: '',
	packages: {        
      'app': {
        format: 'register',
        defaultExtension: 'js'
      }
    }
});
System.import('./bootstrap.js')
	.then(null, console.error.bind(console));