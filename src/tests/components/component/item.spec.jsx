define([ 'lodash', 'React', 'reactDOM', 'components/component/Item'],
    function (_, React, ReactDOM, Item) {
        'use strict';

        var TestUtils = React.addons.TestUtils;

        describe('Item in To Do List', function () {
            it('should be without line-through decoration when not done', function () {
                var key = _.uniqueId();
                var setItemStatus = function(index, newStatus)
                {console.log('Task ' + index + ' got new status ' + newStatus )};

                var instance = (<Item key={key}
                index={key}
                data={{done: false, title: 'my first task!'}}
                setItemStatus ={setItemStatus}/>);

                var renderer = TestUtils.createRenderer();
                renderer.render(instance);
                var actual = renderer.getRenderOutput().props.style;
                var expected = {textDecoration: "none"};
                expect(actual).toEqual(expected);
            });

            it('should be with line-through decoration when done', function () {
                var key = _.uniqueId();
                var setItemStatus = function(index, newStatus)
                {console.log('Task ' + index + ' got new status ' + newStatus )};

                var instance = (<Item key={key}
                                      index={key}
                                      data={{done: true, title: 'my first task'}}
                                      setItemStatus ={setItemStatus}/>);

                var renderer = TestUtils.createRenderer();
                renderer.render(instance);
                var actual = renderer.getRenderOutput().props.style;
                var expected = {textDecoration: "line-through"};
                expect(actual).toEqual(expected);
            });
        });

    });
