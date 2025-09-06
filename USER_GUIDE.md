# User Flow Guide

This document provides an overview of how end users and administrators interact with the Guidance System.

## 1. Account Creation
1. Navigate to the registration page on the client.
2. Provide the required details such as name, email address, and a secure password.
3. Submit the form to create your account. A confirmation message indicates that registration succeeded.

## 2. Logging In
1. Open the login page.
2. Enter your registered email and password.
3. After authentication you will be redirected to the dashboard where you can begin working with data.

## 3. Uploading Data
1. From the dashboard choose the form type you wish to process (e.g., **ASSI-A** or **ASSI-C**).
2. Upload a CSV file that matches the expected format for the selected form.
3. The system validates the file structure and stores it for processing.
4. Once uploaded, the file is preprocessed and prepared for analysis.

## 4. Data Processing Algorithms
Uploaded data is processed with a combination of clustering and classification algorithms:

- **PCA (Principal Component Analysis):** reduces dimensionality to highlight the most relevant features.
- **K-Means Clustering:** groups similar records into clusters for exploratory analysis.
- **SVM (Support Vector Machine):** supervised classifier that predicts target categories.
- **Random Forest:** ensemble classifier that aggregates multiple decision trees to improve accuracy.
- **Neural Network:** deep learning approach used when the dataset contains complex relationships.

## 5. Viewing Records and Results
1. After processing, navigate to the records page.
2. Each uploaded dataset displays summary statistics, cluster assignments, and classification results.
3. You can filter by attributes such as gender or grade and download detailed reports for further review.

## 6. Administrator Features
Administrators have access to additional tools:

- **Account Management:** view all registered users, reset passwords, or deactivate accounts.
- **Dataset Oversight:** inspect uploaded files and remove datasets that violate policy.
- **System Monitoring:** review logs and processing outcomes to ensure the service is functioning correctly.

For further information on setting up and running the application, refer to the main [README](README.md).
