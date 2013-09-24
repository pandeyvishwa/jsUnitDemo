		var map=null;
		var mapName = "SiRFMap";

		var poiResponse = null;
			
		 function init() {
//		 alert("hiii");
		 map = new mxn.Mapstraction('map', 'openlayers');
		 
			map.addLayer("GOOGLE", "Google Map");    
			 map.setCenter(new mxn.LatLonPoint(28.647812595218, 77.24006652832));
			 map.setZoom(4);
//			 getPOICategories();
			 executePoiTestSuite();
         }

		 function updatePOICategory() {
		 	updatePOICategoriesErrorDesc = null;
			updatePOICategoriesErrorCode = null;
			updatePoiCategory_pass_fail_flag = false; 
			updatedPOICategoryId = null;

			map.updatePoiCategories(updatePoiCategoryData, mapName, function(ids) {
			updatedPOICategoryId = 'Updated ' + ids[0];
			updatePoiCategory_pass_fail_flag = true;
			},function(errorDesc, errorCode){
//			alert(errorCode+" : "+errorDesc);
			if (errorCode == 105){		// 105 : No data found.
				updatePOICategoriesErrorCode = errorCode;
				updatePOICategoriesErrorDesc = errorDesc;
				updatePoiCategory_pass_fail_flag = true;
				}
			else if(errorCode == 107){
				updatePOICategoriesErrorCode = errorCode;
				updatePOICategoriesErrorDesc = errorDesc;
				updatePoiCategory_pass_fail_flag = true;
			}
			else if(errorCode == 32){
				updatePOICategoriesErrorCode = errorCode;
				updatePOICategoriesErrorDesc = errorDesc;
				updatePoiCategory_pass_fail_flag = true;
			}
			else if(errorCode == 116){		// Invalid JSON format sent in UpdatePoiCategoryInput
				updatePOICategoriesErrorCode = errorCode;
				updatePOICategoriesErrorDesc = errorDesc;
				updatePoiCategory_pass_fail_flag = true;
			}
			else{
				updatePOICategoriesErrorCode = errorCode;
				updatePOICategoriesErrorDesc = errorDesc;			
				updatePoiCategory_pass_fail_flag = false;
				} 
			});
        }

