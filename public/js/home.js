$("document").ready(function() {
	
	$(".delete-category").on("click", function(e) {
		var category_id = $(this).val();
		if (confirm("Êtes-vous sûr ?")) {
			$.ajax({
				url     : '/category/' + category_id,
				method  : 'DELETE',
				data    : { id: category_id },
				success : function(data, status, xhr) {
					var response = $.parseJSON(data);
					if (response.status == 200) {
						alert(response.msg);
						location.reload();
					}
				},
				error   : function(xhr, status, error) {
					alert('An error occurred : ' + error);
				}
			});
		}
	});

	$(".delete-link").on("click", function(e) {
		var link_id = $(this).val();
		if (confirm("Êtes-vous sûr ?")) {
			$.ajax({
				url     : '/link/' + link_id,
				method  : 'DELETE',
				data    : { id: link_id },
				success : function(data, status, xhr) {
					var response = $.parseJSON(data);
					if (response.status == 200) {
						alert(response.msg);
						location.reload();
					}
				},
				error   : function(xhr, status, error) {
					alert('An error occurred : ' + error);
				}
			});
		}
	});

	$(".dropdown-link-category").on("click", function(e) {
		var category_id   = $(this).data("id");
		var category_name = $(this).data("name");
		if (parseInt(category_id) != -1) {
			$("#input-hidden-link-category").val(category_id);
			$("#text-dropdown-link-category").html(category_name);
		} else {
			$("#input-hidden-link-category").val("");
			$("#text-dropdown-link-category").html("Catégorie");
		}
	});

	/*
	$(".change-category").on("submit", function(e) {
		console.log($(this).serialize());
		return false;
	});
	*/

});