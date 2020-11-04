<script>
  import logoType from 'images/logo_type.svg'
</script>
<style>
@keyframes logobganim {
  from {background-position: 0% 0%}
  to {background-position: 100% 0%}
}

.logo {
  display: initial;
  background: #7f0080;
  background: linear-gradient(45deg, #ad5389, #3c1053, #ad5389);
  background-size: 400% 400%;border-radius: 50%;
  animation: 1s ease infinite paused alternate logobganim;
}
.logo:hover {
  animation: 1s ease infinite alternate logobganim;
}
</style>
<img alt="" class:logo={true} src={logoType} {...$$restProps} >
