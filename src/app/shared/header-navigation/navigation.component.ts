import { Component, AfterViewInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
	name:string;
  	showHide:boolean;
  
  	constructor() {
    	this.showHide = true;
  	}
  
  	changeShowStatus(){
    	this.showHide = !this.showHide;
  	}
    
    ngAfterViewInit() {

        $(function () {
            $(".preloader").fadeOut();
        });

        var set = function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            var topOffset = 60;
            if (width < 1170) {
                $("body").addClass("mini-sidebar");
                $('.navbar-brand span').hide();
                $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
                $(".sidebartoggler i").addClass("ti-menu");
            } else {
                $("body").removeClass("mini-sidebar");
                $('.navbar-brand span').show();
                $(".sidebartoggler i").removeClass("ti-menu");
            }

            var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                $(".page-wrapper").css("min-height", (height) + "px");
            }

        };
        $(window).ready(set);
        $(window).on("resize", set);

        $(document).on('click', '.mega-dropdown', function (e) {
            e.stopPropagation();
        });
        
        $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
            $(".app-search").toggle(200);
        });
        
        /*(<any>$('.scroll-sidebar, .right-sidebar, .message-center')).perfectScrollbar();*/

        (<any>$('.scroll-sidebar')).slimScroll({
            position: 'left',
            size: "5px",
            height: '100%',
            color: '#dcdcdc'
        });

        (<any>$('.right-sidebar')).slimScroll({
            height: '100%',
            position: 'right',
            size: "5px",
            color: '#dcdcdc'
        });

        (<any>$('.message-center')).slimScroll({
            position: 'right',
            size: "5px",
            color: '#dcdcdc'
        });

        $("body").trigger("resize");
    }
}
