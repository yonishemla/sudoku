let board1= [[5,3,4,6,7,8,9,1,2],
             [6,7,2,1,9,5,3,4,8],
             [1,9,8,3,4,2,5,6,7],
             [8,5,9,7,6,1,4,2,3],
             [4,2,6,8,5,3,7,9,1],
             [7,1,3,9,2,4,8,5,6],
             [9,6,1,5,3,7,2,8,4],
             [2,8,7,4,1,9,6,3,5],
             [3,4,5,2,8,6,1,7,9]];

let board2= [[9,5,7,6,1,3,2,8,4],
             [4,8,3,2,5,7,1,9,6],
             [6,1,2,8,4,9,5,3,7],
             [1,7,8,3,6,4,9,5,2],
             [5,2,4,9,7,1,3,6,8],
             [3,6,9,5,2,8,7,4,1],
             [8,4,5,7,9,2,6,1,3],
             [2,9,1,4,3,6,8,7,5],
             [7,3,6,1,8,5,4,2,9]];
        
let board3=[[8,1,2,7,5,3,6,4,9],
            [9,4,3,6,8,2,1,7,5],
            [6,7,5,4,9,1,2,8,3],
            [1,5,4,2,3,7,8,9,6],
            [3,6,9,8,4,5,7,2,1],
            [2,8,7,1,6,9,5,3,4],
            [5,2,1,9,7,4,3,6,8],
            [4,3,8,5,2,6,9,1,7],
            [7,9,6,3,1,8,4,5,2]]  ;  
  
 let board4=[[1,6,3,2,5,9,7,4,8],
             [7,2,8,1,4,3,9,5,6],
             [5,9,4,8,6,7,2,3,1],
             [9,8,5,3,7,6,4,1,2],
             [6,3,1,5,2,4,8,7,9],
             [4,7,2,9,1,8,5,6,3],
             [2,1,9,4,3,5,6,8,7],
             [8,4,7,6,9,1,3,2,5],
             [3,5,6,7,8,2,1,9,4]];

            

            let startbtn = document.getElementById("startbtn");
            let checkbtn = document.getElementById("checkbtn");
            let restartbtn = document.getElementById("restartbtn");
            let imdiv = document.getElementById("imdiv");
            let tablesu = document.getElementById("tablesu");
            let faildiv = document.getElementById("faildiv");
            let windiv = document.getElementById("windiv");
            checkbtn.style.display = "none";
            startbtn.style.display = "none";
            faildiv.style.display = "none";
            windiv.style.display = "none";
            restartbtn.style.display = "none";


            

             function showboard(){   
                let numbers = 9;
                let selectedBoard = board1;
                let l1 = document.getElementById("l1");
                let l2 = document.getElementById("l2");
                let l3 = document.getElementById("l3");

                startbtn.style.display = "none";
                imdiv.style.display = "none";
                l1.style.display = "none";
                l2.style.display = "none";
                l3.style.display = "none";
                checkbtn.style.display = "block";
                

                let boardRnd = Math.floor(Math.random()*4 - 1) + 2;
                if(boardRnd == 1)
                    selectedBoard = board1;
                if(boardRnd == 2)
                    selectedBoard = board2;
                if(boardRnd == 3)
                    selectedBoard = board3;
                if(boardRnd == 4)
                    selectedBoard = board4;
        
                console.log(boardRnd);
                
                for(i=0;i<9;i++){
                    let numbersToShow = level * numbers / 100;
                    for(j=0;j<9;j++){
                        let rnd = Math.floor(Math.random()*10);
                        if( numbersToShow > 0 && rnd % 2 == 0){
                            document.getElementById("d" +i+j).innerHTML = '<input type="text" class="numin" id="txt' + i + j + '" value="' + selectedBoard[i][j] + '"' + ' disabled  size="3">';
                            numbersToShow--;
                        }else{
                            document.getElementById("d" +i+j).innerHTML = '<input type="text" class="numin" id="' + "txt" +i+j +  '" size="3">';
                        }
                        
                    }
                }
            }
            function setLevel(inputLevel){
                level = inputLevel;
                startbtn.style.display = "block";
            }
        
        
            function check(){
                checkbtn.style.display = "none";
                let verify = true;
                let arr1 = [0,0,0,0,0,0,0,0,0];
                for (row=0;row<arr1.lenght;row++){  //collect row for check
                    for (col=0;col<arr1[row].lenght;col++){
                        let txtDigit = document.getElementById("txt"+row+col);
                        arr1[col] = txtDigit.value;
                    }
                    verify = cheksudoku(arr1);
                    if(!verify){
                        // window.alert('Failed');
                        // window.location.assign("failed.html");
                        // document.getElementById('tablesu').innerHTML = 'fail';
                        tablesu.style.display = "none";
                        faildiv.style.display = "block";
                        restartbtn.style.display = "block";

                        return;
                    }
                }
        
                for (row=0;row<arr1.lenght;row++){  // collect col for check
                    for (col=0;col<arr1[row].lenght;col++){
                        let txtDigit = document.getElementById("txt"+col+row);
                        arr1[col] = txtDigit.value;
                    }
                    verify = cheksudoku(arr1);
                    if(!verify){
                        // window.alert('Failed');
                        // window.location.assign("failed.html");
                        // document.getElementById('tablesu').innerHTML = 'fail';
                        tablesu.style.display = "none";
                        faildiv.style.display = "block";
                        restartbtn.style.display = "block";
                        return;
                    }
                }
        
                for(squareRow = 0; squareRow<9; squareRow+=3){  // collect square for check
                    for(squareCol = 0; squareCol<9; squareCol+=3){
                        pos=0;
                        for (row=squareRow;row<squareRow+3;row++){
                            
                            for (col=squareCol;col<squareCol+3;col++){
                                let txtDigit = document.getElementById("txt"+col+row);
                                arr1[pos] = txtDigit.value;
                                pos++;
                            }
                        }
                        verify = cheksudoku(arr1);
                        if(!verify){
                            // window.alert('Failed');
                            // window.location.assign("failed.html");
                            // document.getElementById('tablesu').innerHTML = 'fail';
                            tablesu.style.display = "none";
                            faildiv.style.display = "block";
                            restartbtn.style.display = "block";
                            return;
                        }
                    }
                }
                // window.alert('very good!!');
                // window.location.assign("win.html");
                        tablesu.style.display = "none";
                        windiv.style.display = "block";
                        restartbtn.style.display = "block";
            }
        
            function cheksudoku(arr){
                let counter=[0,0,0,0,0,0,0,0,0];
            
                for(let digit = 0; digit < arr.length; digit++){
                    counter[arr[digit]-1]++;
                    if(counter[arr[digit]-1] != 1){
                        return false;
                    }
                }
                return true;
            }    