package main.java.test;

import java.util.Arrays;
import java.util.Collections;

public class FindGCD {
	
	public static int gcd(Integer[] arr) {
		
		int gcd = 1;
		
		loop:
		for (int j =  Collections.min(Arrays.asList(arr)); j > 0; j--) {
			
			boolean passedAll = true;
			
			for (int i: arr) if (i % j != 0) passedAll = false;
			
			if (passedAll) {
				gcd = j;
				break loop;
			}
		}
		
		return gcd;
	}

}
