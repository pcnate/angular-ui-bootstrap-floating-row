/*
##################################################################################################
##                                                                                              ##
##  Script:   /example/controller.js                                                            ##
##  Author:   Nathan Baker                                                                      ##
##  Date:     June 14th, 2015                                                                   ##
##  Descr:    Basic controller for example usage                                                ##
##                                                                                              ##
##################################################################################################
*/

angular.

//---------------------------------------------------------------------------------------------------------------------------------------------------
// directive to allow item to scroll with top of page or stay where it belongs
  .directive( 'floatingRow', function( $document, $window ) {
    return {
      restrict: 'A',
      link: function($scope, $element) {
        $document.bind('scroll', function() {

          var docViewTop = $window.pageYOffset;
          var docViewBottom = docViewTop + $window.innerHeight;

          var elemTop = $element.parent().parent().offset().top;
          var elemBottom = elemTop + $element.parent().parent().height();

          if((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) ) {
            // console.log( 'visible' );
            $element.parent().parent().css("height", "auto" );
            $element
              .css("position", "relative")
              .css("z-index",  "auto" )
              .css("width", $element.parent().parent().css("width") )
              .css("top", $element.parent().parent().css("top") );
            // $element.css("position", "absolute").css("width", $element.css("width") ).css("top", $element.css("top") );
          } else {
            // console.log( 'invisible' );
            $element.parent().parent().css("height", $element.css("height") );
            $element
              .css("position", "fixed")
              .css("z-index",  "1000" )
              .css("top", "0px")
              .css("width", $element.parent().parent().css("width") );
            // $element.css("position", "fixed").css("top", "0px").css("width", $element.css("width") );
          }
        });
      }
    }
  })