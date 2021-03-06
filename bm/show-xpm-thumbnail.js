var iframeContents = $kj("div.frame-application-scroll-wrapper iframe").contents();
var frameWrapper = $kj(iframeContents).find("#FrameWrapper");
$kj(iframeContents).find("#LibraryList div.body").bind("DOMNodeInserted",waitForFrameToLoad);

frameWrapper.prepend("<img id='biggerThumbnailXpm' src='//pbs.twimg.com/profile_images/1766079984/Twitterbuddyoriginal.jpg' style='width:256px;height:256px;position:absolute;bottom:0;right:0;opacity:0.75'>");

function waitForFrameToLoad()
{
	setTimeout(fixThumbnailsForElements, 1500);
}

function fixThumbnailsForElements()
{
	
	var activeIframe = $kj(iframeContents).find("#LibraryList div.body iframe.active");
	
	var imageItems = activeIframe.contents().find("div.icon.image");

	var activeIframeBody = activeIframe.contents().find('body');

	var bigThumbnail = frameWrapper.find("#biggerThumbnailXpm");

	$kj(imageItems).each(function(index, item){
		console.log("processing...");
		generateBiggerThumbnails(index, item, activeIframeBody, bigThumbnail);
	});
}

function generateBiggerThumbnails(index, item, body, img){

	var thumbnailFixed = $kj(item).attr("data-thumbnail-fixed");
	
	if(!thumbnailFixed)
	{
		$kj(item).attr("data-thumbnail-fixed","yes");
		var imageUrl = $kj(item).attr("c:image");
		var biggerThumbnailUrl = imageUrl;
		var styleText = $kj(item).attr("style");
		if(imageUrl)
		{
			biggerThumbnailUrl = imageUrl.replace("maxwidth=32&maxheight=32","maxwidth=256&maxheight=256");

			$kj(item).attr("data-thumbnail",biggerThumbnailUrl);

			$kj(item).mousemove(function(e){
				$kj(img).attr("src",biggerThumbnailUrl);
				console.log("image mouse move");
			});
		}
	}
}