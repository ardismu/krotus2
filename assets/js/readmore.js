/**
*
* Copyright 2017 Google Inc. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>*/
//flip1
		$(document).ready(function(){

//Fader Manual Automation
		$("#tab1Pointer").click(function(){
			$("#tab1").show();
			$("#tab2").hide();
		});

		$("#tab2Pointer").click(function(){
			$("#tab2").show();
			$("#tab1").hide();
		});


//HOW_WE_Show 2
		$("#hidePopUp2").click(function(){
			$("#ReadPopUp2").hide();
		  });

		$("#ReadPopUp2").mouseleave(function(){
			$("#ReadPopUp2").hide();
			$("body.body").style.overflow = "auto";
		  });
		  $("#ShowPopUp2").click(function(){
			$("#ReadPopUp2").show();
			$("body.body").style.overflow = "hidden";
		  });	
			
//show3
		$("#hidePopUp3").click(function(){
			$("#ReadPopUp3").hide();
		});

		$("#ReadPopUp3").mouseleave(function(){
			$("#ReadPopUp3").hide();
			$("body.body").style.overflow = "auto";
		});
		$("#ShowPopUp3").click(function(){
			$("#ReadPopUp3").show();
			$("body.body").style.overflow = "hidden";
		});	
//show2
		  $("#hide2").click(function(){
			$("#fixed2").hide();
		  });
		  $("#show2").click(function(){
			$("#fixed2").show();
		  });
//show3
		  $("#hide3").click(function(){
			$("#fixed3").hide();
		  });
		  $("#show3").click(function(){
			$("#fixed3").show();
		  });
//show4
		  $("#hide4").click(function(){
			$("#fixed4").hide();
		  });
		  $("#show4").click(function(){
			$("#fixed4").show();
		  });
//show5
		  $("#hide5").click(function(){
			$("#fixed5").hide();
		  });
		  $("#show5").click(function(){
			$("#fixed5").show();
		  });
//show6
		  $("#hide6").click(function(){
			$("#fixed6").hide();
		  });
		  $("#show6").click(function(){
			$("#fixed6").show();
		  });
			
});