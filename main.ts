namespace Tryout 
{
  /* My firts extension it"s a Tryout
  */
  //% blockId = TryoutDisplayVar
  //% block="Displayvariable $x"
  //% x.min=0 x.max=9
  
    export function DisplayVar(x: number): void
    {
        basic.showNumber(x)
    }
}
