


$.get("data/blog.json").done(function(data) {
    data.forEach(post => {
        var html = '<div class="row m-5">'
                + '<h3>' + post.title + '</h3>'
                + '<p>' + post.content + '</p>'
                + '<span class="badge badge-secondary">' + post.categories.join(" / ") + '</span>';
                + '</div>';
        $('#posts').append(html)
    })

})




