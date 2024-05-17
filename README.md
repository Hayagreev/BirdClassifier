# Bird Classifier

Simply upload an image of a bird, click submit, and view details about the bird.

Example flow:

<img width="455" alt="Screenshot 2024-05-17 at 2 44 58 PM" src="https://github.com/Hayagreev/BirdClassifier/assets/45719081/22ace681-614a-4137-b0a1-dc361c412a3b">
<img width="456" alt="Screenshot 2024-05-17 at 2 45 12 PM" src="https://github.com/Hayagreev/BirdClassifier/assets/45719081/accb8a45-d5e3-4bc4-97a0-22f49701e2ac">
<img width="468" alt="Screenshot 2024-05-17 at 2 45 23 PM" src="https://github.com/Hayagreev/BirdClassifier/assets/45719081/a888cb5d-df03-4c41-bc1f-5036b1f677d4">
<img width="454" alt="Screenshot 2024-05-17 at 2 45 32 PM" src="https://github.com/Hayagreev/BirdClassifier/assets/45719081/089de7c3-d571-4a26-8f7a-3cd6fcb33fc9">
<img width="453" alt="Screenshot 2024-05-17 at 2 45 53 PM" src="https://github.com/Hayagreev/BirdClassifier/assets/45719081/fd0b6276-73e1-4bff-84ed-aa5d06ffa1dd">
<img width="451" alt="Screenshot 2024-05-17 at 2 46 10 PM" src="https://github.com/Hayagreev/BirdClassifier/assets/45719081/1b170279-44a5-4d85-b003-e4bf27439c31">

Another example of a bird classification is below:\
<img width="451" alt="Screenshot 2024-05-17 at 2 46 30 PM" src="https://github.com/Hayagreev/BirdClassifier/assets/45719081/6e7277ca-46c7-4fd2-b13f-809fdbb1c153">


Commands to run the TensorFlow Serving Server (Example):

docker pull emacski/tensorflow-serving:latest-linux_arm64

docker run -t --rm -p 8501:8501 --mount type=bind,source=/Users/hayagreevdilip/FlowerClassifier/models/model_b,target=/models/model_b/ -e MODEL_NAME=model_b emacski/tensorflow-serving:latest-linux_arm64
