<template>
    <section class = "section section-lg section-nucleo-icons pb-250">
        <div @mouseleave = "showIconsAnimation = false" class = "container">
            <div @mouseover = "showIconsAnimation = true" class = "row justify-content-center">
                <div class = "col-lg-8 text-center">
                    <h2 class = "display-3">Nucleo Icons</h2>
                    <p class = "lead">
                        The official package contains over 21.000 icons which are looking great in combination with
                        Argon Design System. Make sure you check all of them and use those that you like the most.
                    </p>
                    <div class = "btn-wrapper">
                        <a class = "btn btn-primary"
                           href = "https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html">View demo icons</a>
                        <a class = "btn btn-default mt-3 mt-md-0" href = "https://nucleoapp.com/?ref=1712" target = "_blank">View
                                                                                                                             all
                                                                                                                             icons</a>
                    </div>
                </div>
            </div>
            <div class = "blur--hover">
                <a href = "https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html">
                    <div :class = "{'on-screen': showIconsAnimation}" class = "icons-container blur-item mt-5">
                        <!-- Center -->
                        <i class = "icon ni ni-diamond"></i>
                        <!-- Right 1 -->
                        <i class = "icon icon-sm ni ni-album-2"></i>
                        <i class = "icon icon-sm ni ni-app"></i>
                        <i class = "icon icon-sm ni ni-atom"></i>
                        <!-- Right 2 -->
                        <i class = "icon ni ni-bag-17"></i>
                        <i class = "icon ni ni-bell-55"></i>
                        <i class = "icon ni ni-credit-card"></i>
                        <!-- Left 1 -->
                        <i class = "icon icon-sm ni ni-briefcase-24"></i>
                        <i class = "icon icon-sm ni ni-building"></i>
                        <i class = "icon icon-sm ni ni-button-play"></i>
                        <!-- Left 2 -->
                        <i class = "icon ni ni-calendar-grid-58"></i>
                        <i class = "icon ni ni-camera-compact"></i>
                        <i class = "icon ni ni-chart-bar-32"></i>
                    </div>
                    <span class = "blur-hidden h5 text-success">Explore all the 21.000+ Nucleo Icons</span>
                </a>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                showIconsAnimation: false
            };
        },
        methods: {
            onScroll(evt) {
                console.log(evt);
            }
        }
    };
</script>
<style>
</style>
