$(document).ready(function(){
    $('.modal').modal();
    $('.trigger-modal').modal();
    $('.dropdown-trigger').dropdown({
        inDuration: 600,
        outDuration: 600,
        coverTrigger: false,
    });
    $('.collapsible').collapsible();
  });

  M.Tabs.init(document.querySelector('.tabs'))
