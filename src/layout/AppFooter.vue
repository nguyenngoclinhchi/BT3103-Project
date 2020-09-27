<template>
    <footer class = "footer has-cards">
        <div class = "container container-lg">
            <div class = "row">
                <div class = "col-md-6 mb-5 mb-md-0">
                    <div class = "card card-lift--hover shadow border-0">
                        <router-link title = "Landing Page" to = "/landing">
                            <img class = "card-img" v-lazy = "'img/theme/landing.jpg'">
                        </router-link>
                    </div>
                </div>
                <div class = "col-md-6 mb-5 mb-lg-0">
                    <div class = "card card-lift--hover shadow border-0">
                        <router-link title = "Profile Page" to = "/profile">
                            <img class = "card-img" v-lazy = "'img/theme/profile.jpg'">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class = "container">
            <div class = "row row-grid align-items-center my-md">
                <div class = "col-lg-6">
                    <h3 class = "text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
                    <h4 class = "mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
                </div>
                <div class = "col-lg-6 text-lg-center btn-wrapper">
                    <a class = "btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-original-title = "Follow us" data-toggle = "tooltip"
                       href = "https://twitter.com/creativetim" rel = "noopener"
                       target = "_blank">
                        <i class = "fa fa-twitter"></i>
                    </a>
                    <a class = "btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-original-title = "Like us" data-toggle = "tooltip"
                       href = "https://www.facebook.com/creativetim" rel = "noopener"
                       target = "_blank">
                        <i class = "fa fa-facebook-square"></i>
                    </a>
                    <a class = "btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-original-title = "Follow us" data-toggle = "tooltip"
                       href = "https://dribbble.com/creativetim" rel = "noopener"
                       target = "_blank">
                        <i class = "fa fa-dribbble"></i>
                    </a>
                    <a class = "btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-original-title = "Star on Github" data-toggle = "tooltip"
                       href = "https://github.com/creativetimofficial" rel = "noopener"
                       target = "_blank">
                        <i class = "fa fa-github"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class = "row align-items-center justify-content-md-between">
                <div class = "col-md-6">
                    <div class = "copyright">
                        &copy; {{year}}
                        <a href = "https://www.creative-tim.com" rel = "noopener" target = "_blank">Creative Tim</a> &
                        <a href = "https://www.binarcode.com" rel = "noopener" target = "_blank">Binar Code</a>
                    </div>
                </div>
                <div class = "col-md-6">
                    <ul class = "nav nav-footer justify-content-end">
                        <li class = "nav-item">
                            <a class = "nav-link" href = "https://www.creative-tim.com" rel = "noopener" target = "_blank">Creative
                                                                                                                           Tim</a>
                        </li>
                        <li class = "nav-item">
                            <a class = "nav-link" href = "https://www.creative-tim.com/presentation" rel = "noopener" target = "_blank">About
                                                                                                                                        Us</a>
                        </li>
                        <li class = "nav-item">
                            <a class = "nav-link" href = "http://blog.creative-tim.com" rel = "noopener" target = "_blank">Blog</a>
                        </li>
                        <li class = "nav-item">
                            <a class = "nav-link"
                               href = "https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md" rel = "noopener" target = "_blank">MIT License</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'app-footer',
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    };
</script>
<style>
</style>
