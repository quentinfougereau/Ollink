$("document").ready(function() {
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
});