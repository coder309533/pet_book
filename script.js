var images = [
    "https://images.unsplash.com/photo-1612701021417-071c4bd0c15f?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1612943790392-8b154627d758?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1612525426214-39d36618cab7?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1612830117760-0f8e0cba1336?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1607274134639-043342705e6f?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1612909100591-fb8bff02d5c9?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1612637866989-495fdf0e0d1d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1612733773031-98e996dc25b9?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1612979148245-d8c79c50935d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
    "https://images.unsplash.com/photo-1612468655278-56aec062f63b?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
  ];
  var i = 0;
  function nextslide() {
    if (i == 9) {
      i = 0;
    }
    document.getElementById("album").src = images[i];
    i++;
  }
  