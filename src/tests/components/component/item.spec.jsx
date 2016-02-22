define([ 'lodash', 'React', 'reactDOM', 'components/component/Item'],
    function (_, React, ReactDOM, Item) {
        'use strict';

        var TestUtils = React.addons.TestUtils;

        describe('Item in To Do List', function () {

            function getDemoItemInstance()
            {
                var key = _.uniqueId();
                var setItemStatus = function(index, newStatus)
                {console.log('Task ' + index + ' got new status ' + newStatus )};

                return (<Item key={key}
                                      index={key}
                                      data={{done: true, title: 'my first task!'}}
                                      setItemStatus = {setItemStatus}/>);
            }

            function getStyleofRenderedToDoItem(isDone)
            {
                var key = _.uniqueId();
                var setItemStatus = function(index, newStatus)
                {console.log('Task ' + index + ' got new status ' + newStatus )};

                var instance = (<Item key={key}
                                      index={key}
                                      data={{done: isDone, title: 'my first task!'}}
                                      setItemStatus = {setItemStatus}/>);

                var renderer = TestUtils.createRenderer();
                renderer.render(instance);
                return renderer.getRenderOutput().props.style;
            }

            it('should be without line-through decoration when not done', function () {
                expect(getStyleofRenderedToDoItem(false)).toEqual({textDecoration: "none"});
            });

            it('should be with line-through decoration when done', function () {
                expect(getStyleofRenderedToDoItem(true)).toEqual({textDecoration: "line-through"});
            });

            it('should get defined callback', function () {
                var renderer = TestUtils.createRenderer();
                renderer.render(getDemoItemInstance());
                var props = renderer.getRenderOutput().props;
                expect(props.onClick).toBeDefined();
            });
        });

    });
