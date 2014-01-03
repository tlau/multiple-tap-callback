Multiple tap callback bug
=========================

This repo illustrates a bug in Meteor's handling of the tap event which causes
the tap callback to fire multiple times.

The number of times it is fired is equal to the depth of elements nested inside
the target of the tap event.

Each time the tap callback is fired, it will add a message to the log (displayed
at the bottom of the screen).
