<template>
  <!-- <div class="hello">
    <h1 v-once>{{ msg }}</h1>
    <h3> {{ sayHi() }}</h3>
  </div> -->

  <div @mousemove="updataMouse">
    <div>{{ mousePosition }} </div>
    <button @click= "increment">Count</button>
    <div>{{ count }}</div>
    <div>{{ multipulicationResult }}</div>
  </div>
  
</template>

<script>
// export default {
//   name: 'HelloWorld',
//   data() {
//     return {
//       msg:  'hello world'
//     }
//   },
//   methods: {
//     sayHi(){
//       this.msg = 'hello Vue';
//       return 'Hi';
//     }
//   }
// }

  import { ref, computed, watch } from 'vue';
  import { usePosition } from './../util-functions/position' 
  export default {
    props: {
      times: {
        type: Number,
        default: 2
      }
    },
    // beforeCreateの前（vueの生成前に実行されるのでthisが使えない）
    setup(props){

      let count = ref(0);
      // refに入れたらvalueでアクセスする
      const increment = ()=>{
        count.value += 1
      };
      const multipulicationResult = computed(() => {
        return count.value * props.times;
      });
      // 値の変化で発火する.
      // laxy trueで最初の読み込み時に処理をしない
      watch(count, ()=>{
        setTimeout( ()=> {
           alert('3病後');
        } , 3000);
      }, { lazy: true });

      //  imprtしたもの分割代入できるので変数のコンフリクトがなくなる
      // 名前を変えることもできる。
      const { position: mousePosition,  updataPosition: updataMouse} = usePosition();

      return {
        mousePosition,
        count,
        increment,
        updataMouse,
        multipulicationResult
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
