package main.java.test;

public class MaxProfit {

	public static int findMaxProfit(int[] arr) {
		
		int maxProfit = 0;;
		
		for (int i = 0; i < arr.length; i++) {
			for (int j = i; j < arr.length; j++) {
				if (arr[j] - arr[i] > maxProfit) maxProfit = arr[j] - arr[i];
			}
		}
		
		return maxProfit;
	}

}
