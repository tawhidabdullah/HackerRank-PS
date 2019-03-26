function kangaroo(x1, v1, x2, v2) {
    var difference = 0;
    
        var calculate = function () {
            if ((x1 < x2) && ((v1 < v2) || (v1 == v2))) {
                return "NO"
            }
            else {
                while (Math.sign(difference) != -1) {
                    x1 += v1;
                    x2 += v2;
                    difference = x2 - x1;
                    if (difference == 0) {
                        return "YES"
                    }
                }
                return "NO"
            }
        }();
        return calculate;
    
        
    }
    
    
    console.log(kangaroo(0, 3, 4, 2)); 
    