$(document).ready(function() {
  /*자동실행*/
  $(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_company, function() {
        tagList +=
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea').empty();
      $('#listArea').append(tagList);
      $('#listArea').listview('refresh');
    });
  });


  $('#jsonload1').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_company, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date target="_blank"
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea').empty();
      $('#listArea').append(tagList);
      $('#listArea').listview('refresh');
    });
  });
  $('#jsonload2').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_company2, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea').empty();
      $('#listArea').append(tagList);
      $('#listArea').listview('refresh');
    });
  });
  $('#jsonload3').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_company3, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea').empty();
      $('#listArea').append(tagList);
      $('#listArea').listview('refresh');
    });
  });
  $('#jsonload4').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_company4, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea').empty();
      $('#listArea').append(tagList);
      $('#listArea').listview('refresh');
    });
  });
  $('#jsonload5').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_company5, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea').empty();
      $('#listArea').append(tagList);
      $('#listArea').listview('refresh');
    });
  });
  $('#jsonload_news_media').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_media1, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" + this.media_name +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea2').empty();
      $('#listArea2').append(tagList);
      $('#listArea2').listview('refresh');
    });
  });
  $('#jsonload_news_media1').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_media1, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" + this.media_name +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea2').empty();
      $('#listArea2').append(tagList);
      $('#listArea2').listview('refresh');
    });
  });
  $('#jsonload_news_media2').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_media2, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" + this.media_name +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea2').empty();
      $('#listArea2').append(tagList);
      $('#listArea2').listview('refresh');
    });
  });
  $('#jsonload_news_media3').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_media3, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" + this.media_name +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea2').empty();
      $('#listArea2').append(tagList);
      $('#listArea2').listview('refresh');
    });
  });
  $('#jsonload_news_media4').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_media4, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" + this.media_name +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea2').empty();
      $('#listArea2').append(tagList);
      $('#listArea2').listview('refresh');
    });
  });
  $('#jsonload_news_media5').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.news_media5, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" + this.media_name +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea2').empty();
      $('#listArea2').append(tagList);
      $('#listArea2').listview('refresh');
    });
  });
  $('#jsonload_main1').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.main_news, function() {
        tagList +=
          "<li>" +
          "<a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" + "</li>";
      });
      $('#listArea_main').empty();
      $('#listArea_main').append(tagList);
      $('#listArea_main').listview('refresh');
    });
  });
  $('#jsonload_main2').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.main_news2, function() {
        tagList +=
          "<li>" +
          "<a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" + "</li>";
      });
      $('#listArea_main').empty();
      $('#listArea_main').append(tagList);
      $('#listArea_main').listview('refresh');
    });
  });
  /*자동실행*/
  $(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.main_news, function() {
        tagList +=
          "<li>" +
          "<a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" + "</li>";
      });
      $('#listArea_main').empty();
      $('#listArea_main').append(tagList);
      $('#listArea_main').listview('refresh');
    });
  });
  $(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.bmk_news, function() {
        tagList +=
				"<tr>" +
				"<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
				this.news_title + "</a>" +
				"</td>" +
				"<td>" +
				this.news_date +
				"</td>" +
				"</tr>";
      });
      $('#listArea_bmk').empty();
      $('#listArea_bmk').append(tagList);
      $('#listArea_bmk').listview('refresh');
    });
  });
	$('#jsonload_bmk1').click(function() {
    $.getJSON('./js/json_data.json', function(jsonData) {
      var tagList = "";
      var x = '"';
      $.each(jsonData.bmk_news, function() {
        tagList +=
          //   "<tr>" +
          // 	  "<td>"
          // 		    + this.news_title
          // 	+ "</td>"
          // 	+	"<td>"
          // 	      + this.news_date target="_blank"
          //   + "</td>"
          // + "</tr>";
          "<tr>" +
          "<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
          this.news_title + "</a>" +
          "</td>" +
          "<td>" +
          this.news_date +
          "</td>" +
          "</tr>";
      });
      $('#listArea_bmk').empty();
      $('#listArea_bmk').append(tagList);
      $('#listArea_bmk').listview('refresh');
    });
  });
	$('#jsonload_bmk2').click(function() {
		$.getJSON('./js/json_data.json', function(jsonData) {
			var tagList = "";
			var x = '"';
			$.each(jsonData.bmk_news2, function() {
				tagList +=
					//   "<tr>" +
					// 	  "<td>"
					// 		    + this.news_title
					// 	+ "</td>"
					// 	+	"<td>"
					// 	      + this.news_date target="_blank"
					//   + "</td>"
					// + "</tr>";
					"<tr>" +
					"<td><a href=" + x + this.news_link + x + " target=" + x + "_blank" + x + ">" +
					this.news_title + "</a>" +
					"</td>" +
					"<td>" +
					this.news_date +
					"</td>" +
					"</tr>";
			});
			$('#listArea_bmk').empty();
			$('#listArea_bmk').append(tagList);
			$('#listArea_bmk').listview('refresh');
		});
	});
});
