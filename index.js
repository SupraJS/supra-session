/*       .#.                                                       
        @@@@@                                                      
        @@@@@                                                      
          @                                                        
    .....@@@                                                       
   .@@@@@@@                                                        
   @@@@@@@                                                         
    @@@@@@@:@@@..@@@@@@@  @@@   @@@ @@@@@@@@   @@@@@@@      @@@@   
   .@@@@@@@@    @@@@@@@@  @@@   @@@ @@@@@@@@@  @@@@@@@@@  @@@@@@@@ 
   '@@@@@@@@@@@@@@@       @@@   @@@ @@@    @@@ @@@   @@@ @@@    @@@
:@@@@@@@@@:     @@@@@@@@  @@@   @@@ @@@@@@@@@  @@@@@@@@@ @@@    @@@
  `@@@@:             @@@  @@@   @@@ @@@#@@@    @@@@@@@@  @@@@@@@@@@
   @@@         @@@@@@@@@  @@@@@@@@' @@@        @@@  @@@  @@@    @@@
   +##`        @@@@@@@@     @@@@@   @@@        @@@  @@@  @@@    @@@

  Supra
  NodeJS
  Developer
  Friendly
  Framework.

*/

module.exports = Supra.Class.extend({

	init : function(Session){
		console.log('session instantiated');
		this.Session = Session;
	},
  createCookie : function(){

  },
  reset : function(cookies){
    cookies.split(';').forEach(function(cookie,index){
      var cookieName = cookie.split('=')[0];
      if (cookieName.trim() == Supra.prefs.sessionKey){
        /**
         * Cookie exists
         */
        
      }else{
        /**
         * Create a new cookie
         */
        
      }
    })

  },

	write : function(key,value){
		return this.Session[key] = value;
	},

	read : function(key){
		return this.Session[key];
	}


})
