import matplotlib.pyplot as plt

# Data for plotting
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec']
sales = [200, 300, 400, 350, 500, 600, 650 , 750 ,  900 ,1000 , 1300 , 2000] 
# Create a line plot
plt.plot(months, sales, marker='o', linestyle='-', color='b', label='Sales')

# Add labels and title
plt.xlabel('Months')
plt.ylabel('Sales ($)')
plt.title('Monthly Sales Data')
plt.legend()

# Show the plot
plt.show()
