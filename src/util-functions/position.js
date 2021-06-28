import { reactive} from 'vue';
export const usePosition = ()=>{
    const position = reactive({
        x: 0,
        y: 0
      });
      const updataPosition = (event)=> {
         position.x = event.clientX;
         position.y = event.clientY;
      };

      return {position, updataPosition}

}