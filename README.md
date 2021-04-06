# Technology/credit

- React
- Prettier
- Tailwinds
- hero icons
- Manav Misra (codefinity) for template

# About

## this page is a collection of projects that I have worked on. I will only put the projects that I think are interesting and fun on here.

# CubeTurn

## The cube turn has been my favorite project to work on since I started coding. I use the cube turn to tech myself about data manipulation in different languages. If i learn a new language I'll make a new version of the cube turn. This current version on the app is by far the cleanest version of the cube turn. I had to change the data before the return so the code takes up a little space, however the meat and potatoes of the function is very clean.

```function turnRight(cubes){
  let size = Math.sqrt(cubes.length)
  let temp = []

  for(let i = 0; i < size; i++){
    temp.push([])
  }

  for(let i = cubes.length - 1; i > -1; i--){
    temp[i % size].push(cubes[i])
  }
}
```

## This way of doing it has to be one of the fastest ways. I stumbled on this function by accident actually. I also sound out that you can flip the cube by passing in negative values so I added that to the project as well.
