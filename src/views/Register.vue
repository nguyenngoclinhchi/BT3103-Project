<template>
    <section class = "section section-shaped section-lg my-0">
        <div class = "shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class = "container pt-lg-md">
            <div class = "row justify-content-center">
                <div class = "col-lg-5">
                    <card body-classes = "px-lg-5 py-lg-5" class = "border-0"
                          header-classes = "bg-white pb-5"
                          shadow
                          type = "secondary">
                        <template>
                            <div class = "text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class = "btn-wrapper text-center">
                                <base-button type = "neutral">
                                    <img slot = "icon" src = "img/icons/common/github.svg">
                                    Github
                                </base-button>
                                
                                <base-button type = "neutral">
                                    <img slot = "icon" src = "img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class = "text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <form role = "form">
                                <base-input addon-left-icon = "ni ni-hat-3"
                                            alternative
                                            class = "mb-3"
                                            placeholder = "Name">
                                </base-input>
                                <base-input addon-left-icon = "ni ni-email-83"
                                            alternative
                                            class = "mb-3"
                                            placeholder = "Email">
                                </base-input>
                                <base-input addon-left-icon = "ni ni-lock-circle-open"
                                            alternative
                                            placeholder = "Password"
                                            type = "password">
                                </base-input>
                                <div class = "text-muted font-italic">
                                    <small>password strength:
                                        <span class = "text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href = "#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class = "text-center">
                                    <router-link to = "/">
                                        <base-button class = "my-4" type = "primary">Create account</base-button>
                                    </router-link>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {};
</script>
<style>
</style>
