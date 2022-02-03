# Angular-Breakpoint-Observer

This is an app where I'm going to show some examples of how Angular's Breakpoint Observer can be beneficial in creating mobile-ready applications. This app will work with the breakpointObserver in at least three ways:
1. Through a custom directive (hide/show dom elements based on if the directive is true)
2. Directly within a component
3. Through a service (that can be used for cleaner code). The service can be used to determine whether or not the breakpoint observer is true at app initiation or made dynamic to flip between true or false based on the current width
