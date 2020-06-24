
function generateSummary(elm) {

	var targetDivID = elm.id.split("_")[0];

	switch (elm.id) {
		case 'question1summary_ios-app':
			createElementForForm(elm.id, 'iOS App', targetDivID);
			break;
		case 'question1summary_Android-app':
			createElementForForm(elm.id, 'Android App', targetDivID);
			break;
		case 'question1summary_website':
			createElementForForm(elm.id, 'Website', targetDivID);
			break;
		case 'question2summary_shop-ecomm':
			createElementForForm(elm.id, 'Shop /Ecomm', targetDivID);
			break;
		case 'question2summary_donations':
			createElementForForm(elm.id, 'Donations', targetDivID);
			break;
		case 'question2summary_portfolio':
			createElementForForm(elm.id, 'Portfolio', targetDivID);
			break;
		case 'question2summary_health-data-integration':
			createElementForForm(elm.id, 'Health Data', targetDivID);
			break;
		case 'question2summary_live-chat':
			createElementForForm(elm.id, 'Live Chat', targetDivID);
			break;
		case 'question2summary_request-call-back':
			createElementForForm(elm.id, 'Request a call', targetDivID);
			break;
		case 'question2summary_social-media':
			createElementForForm(elm.id, 'Social Media', targetDivID);
			break;
		case 'question2summary_geo-tracking':
			createElementForForm(elm.id, 'Geo-tracking', targetDivID);
			break;
		case 'question2summary_image-gallery':
			createElementForForm(elm.id, 'Image Gallery', targetDivID);
			break;
		case 'question2summary_forum':
			createElementForForm(elm.id, 'Forum', targetDivID);
			break;
		case 'question2summary_bookings':
			createElementForForm(elm.id, 'Bookings', targetDivID);
			break;
		case 'question2summary_push-notifications':
			createElementForForm(elm.id, 'Push notifications', targetDivID);
			break;
		case 'question2summary_online-training':
			createElementForForm(elm.id, 'Trainings', targetDivID);
			break;
		case 'question2summary_event-scheduling':
			createElementForForm(elm.id, 'Events', targetDivID);
			break;
		case 'question2summary_video-library':
			createElementForForm(elm.id, 'Videos', targetDivID);
			break;
		case 'question2summary_augmented-reality':
			createElementForForm(elm.id, 'Augmented Reality', targetDivID);
			break;
		case 'question2summary_web-notifications':
			createElementForForm(elm.id, 'Web notifications', targetDivID);
			break;
		case 'question2summary_media-publications':
			createElementForForm(elm.id, 'Media', targetDivID);
			break;
		case 'question2summary_simple-blog':
			createElementForForm(elm.id, 'Blog', targetDivID);
			break;
		case 'question3summary_0-10':
			createElementForForm(elm.id, '0 - 10 pages', targetDivID);
			break;
		case 'question3summary_10-25':
			createElementForForm(elm.id, '10 - 25 pages', targetDivID);
			break;
		case 'question3summary_25-50':
			createElementForForm(elm.id, '25 - 50 pages', targetDivID);
			break;
		case 'question3summary_50-100':
			createElementForForm(elm.id, '50 - 100 pages', targetDivID);
			break;
		case 'question3summary_100+':
			createElementForForm(elm.id, '100+ # pages', targetDivID);
			break;
		case 'question3summary_i-dont-know':
			createElementForForm(elm.id, 'Not sure about pages', targetDivID);
			break;
		case 'question4summary_yes':
			createElementForForm(elm.id, 'Yes I need hosting', targetDivID);
			break;
		case 'question4summary_own-hosting':
			createElementForForm(elm.id, 'I have my hosting', targetDivID);
			break;
		case 'question5summary_alkye-recommends':
			createElementForForm(elm.id, 'Alkye Recommendation', targetDivID);
			break;
		case 'question5summary_wordpress':
			createElementForForm(elm.id, 'WordPress', targetDivID);
			break;
		case 'question5summary_drupal':
			createElementForForm(elm.id, 'Drupal', targetDivID);
			break;
		case 'question5summary_joomla':
			createElementForForm(elm.id, 'Joomla', targetDivID);
			break;
		case 'question5summary_wix':
			createElementForForm(elm.id, 'Wix', targetDivID);
			break;
		case 'question5summary_react':
			createElementForForm(elm.id, 'React', targetDivID);
			break;
		case 'question5summary_angular':
			createElementForForm(elm.id, 'Angular', targetDivID);
			break;
		case 'question6summary_alkye-recommends-app':
			createElementForForm(elm.id, 'Alkye Recommendation', targetDivID);
			break;
		case 'question6summary_skn-app':
			createElementForForm(elm.id, 'Native App', targetDivID);
			break;
		case 'question6summary_reactnative':
			createElementForForm(elm.id, 'Hybrid App', targetDivID);
			break;
		case 'question6summary_pwa':
			createElementForForm(elm.id, 'PWA', targetDivID);
			break;
		case 'question7summary_user-based-personalisation':
			createElementForForm(elm.id, 'Personalisation yes', targetDivID);
			break;
		case 'question8summary_data-security':
			createElementForForm(elm.id, 'security yes', targetDivID);
			break;
		case 'question9summary_custom-design':
			createElementForForm(elm.id, 'Custom Design', targetDivID);
			break;
		case 'question9summary_templated':
			createElementForForm(elm.id, 'Templated', targetDivID);
			break;
		case 'question10summary_logo-design':
			createElementForForm(elm.id, 'Need logo design', targetDivID);
			break;
		case 'question11summary_value1':
			createElementForForm(elm.id, '0 - 10 email builds', targetDivID);
			break;
		case 'question11summary_value2':
			createElementForForm(elm.id, '10 - 25 email builds', targetDivID);
			break;
		case 'question11summary_value3':
			createElementForForm(elm.id, '25 - 50 email builds', targetDivID);
			break;
		case 'question11summary_value4':
			createElementForForm(elm.id, '50 - 100 email builds', targetDivID);
			break;
		case 'question11summary_value5':
			createElementForForm(elm.id, '100+ #  email builds', targetDivID);
			break;
		case 'question11summary_value6':
			createElementForForm(elm.id, 'Not sure about email builds', targetDivID);
			break;
		case 'question12summary_call-journey':
			createElementForForm(elm.id, 'Request a call journey', targetDivID);
			break;
		case 'question12summary_cart-journey':
			createElementForForm(elm.id, 'Abandon cart journey', targetDivID);
			break;
		case 'question12summary_on-boarding-journey':
			createElementForForm(elm.id, 'New customer on-boarding journey', targetDivID);
			break;
		case 'question13summary_fully-optimised':
			createElementForForm(elm.id, 'Fully Optimised Website Yes', targetDivID);
			break;
		case 'question14summary_copywriting-services':
			createElementForForm(elm.id, 'Copywriting Services Yes', targetDivID);
			break;
		case 'question15summary_social-media-engagement':
			createElementForForm(elm.id, 'Social Media Engagement Yes', targetDivID);
			break;
		case 'question16summary_digital-advertising':
			createElementForForm(elm.id, '', targetDivID);
			break;
		case 'question17summary_End-to-End':
			createElementForForm(elm.id, 'End-to-End Website Reporting', targetDivID);
			break;
		case 'question17summary_sentiment-reporting':
			createElementForForm(elm.id, 'Customer Sentiment Reporting', targetDivID);
			break;
		case 'question17summary_ad-reporting':
			createElementForForm(elm.id, 'Ad Reporting', targetDivID);
			break;
		case 'question17summary_sales-reporting':
			createElementForForm(elm.id, 'Sales Reporting', targetDivID);
			break;
		case 'question17summary_lead-reporting':
			createElementForForm(elm.id, 'Lead Reporting', targetDivID);
			break;
		case 'question17summary_content-reporting':
			createElementForForm(elm.id, 'SEO & Content Reporting', targetDivID);
			break;
		case 'question17summary_data-modeling':
			createElementForForm(elm.id, 'Machine Learning & Data Modeling', targetDivID);
			break;
		case 'question17summary_full-package':
			createElementForForm(elm.id, 'Full Package (Bit of everything)', targetDivID);
			break;
		case 'question18summary_sales-training':
			createElementForForm(elm.id, 'Sales Training', targetDivID);
			break;
		case 'question18summary_list-building':
			createElementForForm(elm.id, 'List Building', targetDivID);
			break;
		case 'question18summary_data-extraction':
			createElementForForm(elm.id, 'Data Extraction and Scraping', targetDivID);
			break;
		case 'question18summary_cold-calling':
			createElementForForm(elm.id, 'Cold Calling 2.0', targetDivID);
			break;
		case 'question19summary_business-consulting':
			createElementForForm(elm.id, 'Business Consulting', targetDivID);
			break;
		case 'question19summary_marketing-finance':
			createElementForForm(elm.id, 'Marketing Finance', targetDivID);
			break;
		case 'question19summary_market-research':
			createElementForForm(elm.id, 'Market Research', targetDivID);
			break;
		case 'question19summary_growth-plan':
			createElementForForm(elm.id, 'Growth Plan', targetDivID);
			break;
		default:
		// code block
	}



}

function createElementForForm(fieldID, label, targetDivID) {


	var fieldIDRemove = fieldID + '_remove';
	var fieldIDLi = fieldID + '_remove-li';

	if (document.getElementById(fieldID).type === 'radio') {
		if (document.getElementById(fieldID).checked === true) {
			var e = document.createElement('div');
			document.getElementById(targetDivID).innerHTML = "<li id=\"" + fieldIDLi + "\">" + label + "<span class=\"close-icon\" id=\"" + fieldIDRemove + "\" onclick=\"removeElement(this)\"></span></li>";
		} else {
			removeElement(document.getElementById(fieldID + "_remove"));
		}
	} else {
		if (document.getElementById(fieldID).checked === true) {
			var e = document.createElement('div');
			e.innerHTML = "<li id=\"" + fieldIDLi + "\">" + label + "<span class=\"close-icon\" id=\"" + fieldIDRemove + "\" onclick=\"removeElement(this)\"></span></li>";
			document.getElementById(targetDivID).appendChild(e.firstChild);
		} else {
			removeElement(document.getElementById(fieldID + "_remove"));
		}
	}


}

function removeElement(elm) {
	var getParentElementID = elm.id + "-li";
	var myobj = document.getElementById(getParentElementID);
	myobj.remove();

	var primaryCheckbox = elm.id.split("_")[0] + "_" + elm.id.split("_")[1];
	document.getElementById(primaryCheckbox).checked = false;
}