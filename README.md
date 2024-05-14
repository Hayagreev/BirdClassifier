# SummerProject

Commands to run the TensorFlow Serving Server:

docker pull emacski/tensorflow-serving:latest-linux_arm64

docker run -t --rm -p 8501:8501 --mount type=bind,source=/Users/hayagreevdilip/FlowerClassifier/models/model_b,target=/models/model_b/ -e MODEL_NAME=model_b emacski/tensorflow-serving:latest-linux_arm64
