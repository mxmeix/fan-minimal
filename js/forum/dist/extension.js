System.register('fan/vote/main', ['flarum/extend', 'flarum/components/Post', 'flarum/components/HeaderSecondary', 'flarum/components/IndexPage'], function (_export) {
  'use strict';

  var extend, Post, HeaderSecondary, IndexPage;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsPost) {
      Post = _flarumComponentsPost['default'];
    }, function (_flarumComponentsHeaderSecondary) {
      HeaderSecondary = _flarumComponentsHeaderSecondary['default'];
    }, function (_flarumComponentsIndexPage) {
      IndexPage = _flarumComponentsIndexPage['default'];
    }],
    execute: function () {

      app.initializers.add('fan-vote', function () {

        //alert('3'); // show something when plugin is loaded

        // // update default view for post
        // Post.prototype.view = function() {
        //   return (
        //     <div className="Post">
        //       :D
        //     </div> 
        //   );
        // };

        // extend dom - add stuff to post
        extend(Post.prototype, 'view', function (vdom) {
          vdom.children.push('hohoho');
          vdom.attrs.style = 'background-color: yellow';
        });

        // extend header (top right of screen) - add a link
        extend(HeaderSecondary.prototype, 'items', function (items) {
          // items.add('google', <a href="http://google.com" className="Button Button--link">Google</a>);

          // Remove existing items
          //items.remove('search');

          // Remove login on header
          //items.remove('logIn');
          // Remove signup on header
          items.remove('signUp');
        });

        extend(IndexPage.prototype, 'sidebarItems', function (items) {
          // Remove newDiscussion/post icon when mobile
          items.remove('newDiscussion');
        });

        extend(IndexPage.prototype, 'navItems', function (items) {
          items.remove('tags');
        });
      });
    }
  };
});