var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;
$(window).load(function() {
    TweenMax.to({}, .016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9, posY += (mouseY - posY) / 9, TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            }), TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })
        }
    }), $(document).live("mousemove", function(o) {
        mouseX = o.pageX, mouseY = o.pageY
    }), $(".link").live("mouseenter", function() {
        cursor.addClass("active"), follower.addClass("active")
    }), $(".link").live("mouseleave", function() {
        cursor.removeClass("active"), follower.removeClass("active")
    }), $(".portfolio-link.link").live("mouseenter", function() {
        cursor.addClass("active2"), follower.addClass("active2")
    }), $(".portfolio-link.link").live("mouseleave", function() {
        cursor.removeClass("active2"), follower.removeClass("active2")
    })
});