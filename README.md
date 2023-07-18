# ProgressBar Component
The ProgressBar component is a simple React component that indicate status of loading
## Installation
To use the ProgressBar component, you need to have a React project set up. If you don't have one, you can create a new React application using Create React App or any other preferred method.



## Usage
To integrate the ProgressBar component into your application, follow these steps:

1.install component in any folder and import and import it


```import ProgressBar from './YourFolder/ProgressBar';```

2.initialize the components with the required properties

```javascript

  <h1>ProgressBar</h1>
      <ProgressBar value={progress} MainBackground='grey'  ProgressBackground='green' ProgressRadius='35px'     NumIndicate={true} NumIndicateColor="#000" NumIndicateSize="18px" NumIndicateWeight="bold" />
   



    <div>
      <h1>rounded ProgressBar</h1>
      <CircularProgressBar  NumIndicate={true} progressColor={'orange'}  NumIndicateSize='25px' NumIndicateColor="#000"  NumIndicateWeight="lighter"  value={progress} strokeWidth={10} sqSize={100} />
      
    </div>

```
## property list (ProgressBar): 


  ### value: 
  

value that you process in your code and specify in the progress bar so that it displays the percentage of completion
  
### MainBackground:
  
Background color of indicator wrapper

### ProgressBackground:
  
Background color of indicator

### ProgressRadius:
Radius of progressbar 

### NumIndicate:

takes one of two states: true/false. If true - enables the display of a numerical indication on the progress bar


### NumIndicateColor:
 color of Numerick indicator
### NumIndicateSize:
size of Numerick indicator
### NumIndicateWeight
weight of Numerick indicator

## property list (CircularProgressBar): 


  ### value: 
  

value that you process in your code and specify in the progress bar so that it displays the percentage of completion

### progressColor :
Background color of indicator

### NumIndicateColor:
 color of Numerick indicator
### NumIndicateSize:
size of Numerick indicator
### NumIndicateWeight
weight of Numerick indicator
### sqSize:
size of progressbar
### strokeWidth:
width of circle prograssbar stroke
