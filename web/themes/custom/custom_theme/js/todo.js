/**
 * @file
 * Custom Theme behaviors.
 */

/**
 * This function adds a todo list functionality on the website.
 */
(function ($, Drupal, once) {
  var listContainer;
  Drupal.behaviors.todoList = {
    attach(context, settings) {
      once('newTest', '.todo', context).forEach(function (element) {
        var data = [];
        var storedData = JSON.parse(localStorage.getItem('data')) || [];
        listContainer = $('.list__container', context);
        $(".todo", context).click(function (event) {
          var inputVal = $('.todoitem').val();
          event.preventDefault();
          let li = document.createElement('li');
          li.innerHTML = inputVal;
          listContainer.append(li);
          data.push(li.innerHTML);
          let span = document.createElement('span');
          span.classList.add('remove');
          span.innerHTML = "\u00d7";
          li.append(span);
          saveData();
          $('.todoitem').val('');
        });

        $(".list__container", context).click(function (e) {
          if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            saveData();
          } 
          else if (e.target.tagName === 'SPAN') {
            var listItem = e.target.parentElement;
            var itemIndex = Array.from(listContainer.children()).indexOf(listItem);
            $(listContainer.children().eq(itemIndex)).remove();
            storedData.splice(itemIndex, 1);
            saveData();
          }
        });

        // This function is used to save the todoList data on browser localStorage.
        function saveData() {
          if (listContainer) {
            let existingData = storedData;
            if (data.length > 0) {
              if (existingData) {
                existingData = existingData.concat(data);
                localStorage.setItem('data', JSON.stringify(existingData));
              }
              else {
                localStorage.setItem('data', JSON.stringify(data));
              }
            }
            else {
              localStorage.setItem('data', JSON.stringify(existingData));
            }
          }
        }

        // This function is used to retrieve data from localStorage and show a list.
        function showList() {
          if (storedData.length) {
            storedData.forEach(item => {
              const listItem = document.createElement('li');
              listItem.innerHTML = item;
              listContainer.append(listItem);
              let span = document.createElement('span');
              span.classList.add('remove');
              span.innerHTML = "\u00d7";
              listItem.append(span);
            });
          } 
        }
        showList();
      });
    },
    
  };
})(jQuery, Drupal, once);
