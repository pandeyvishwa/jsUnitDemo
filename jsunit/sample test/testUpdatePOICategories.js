// updatePOICategory Test Case32: update POI Categories when Id is in Incorrect Format and CategoryName '' (blank) and mapName is correct (SiRFMap).
function updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank(){
var cid = 'P000003';  // PC0000000003
var name = '';
var desc = "Bank and Atm";
		updatePoiCategoryData = [{
			"id": cid,
			"name": name,
			"description": desc
		}];
mapName = 'SiRFMap';
var updatePoiCategories_task = "executing updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank() method.";
updatePOICategory();
	document.getElementById( 'updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank1' ).innerHTML = "updatePOICategory Test Case32: update POI Categories when Id is in Incorrect Format and CategoryName '' (blank) and mapName is correct (SiRFMap).";
	document.getElementById( 'updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank2' ).innerHTML ="Test Data: categoryId = "+ cid +" categoryName = "+name+", description = "+desc+" and mapName = "+mapName;
	document.getElementById( 'updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank3' ).innerHTML = updatePoiCategories_task;
	document.getElementById( 'updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank5' ).innerHTML = updatedPOICategoryId;
	if(updatePoiCategory_pass_fail_flag == true){
		document.getElementById("updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank4").innerHTML = "Expected Result: categoryId = "+ cid +" categoryName = "+name+", description = "+desc+" and mapName = "+mapName;
		document.getElementById( 'updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank6' ).innerHTML ="status = pass";	
			if(updatePOICategoriesErrorDesc != null){
			document.getElementById("updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank4").innerHTML = "Expected Result: categoryId = "+ cid +" categoryName = "+name+", description = "+desc+" and mapName = "+mapName;
			document.getElementById("updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank5").innerHTML = "errorCode = " +updatePOICategoriesErrorCode + " : " + updatePOICategoriesErrorDesc;
	}
		}
		if(updatePoiCategory_pass_fail_flag == false){
			document.getElementById( 'updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank6' ).innerHTML ="status = fail";
			document.getElementById("updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank5").innerHTML = "errorCode = " +updatePOICategoriesErrorCode + " : " + updatePOICategoriesErrorDesc;
		}
	document.getElementById( 'updatePOICategories_CategoryIdFormatIncorrectCategoryNameBlank7' ).innerHTML ="************* End Add POI Categories **********";
}