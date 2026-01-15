Docker compose creates 3 services zookeeper, kafka and kafka ui
docker compose up -d

  python produce_incidents_to_kafka.py produce un incident pe secunda
  Intri în containerul Kafka ca sa vedem ce mesaje sunt in coada:
  kafka-console-consumer \
  --bootstrap-server localhost:9092 \
  --topic incidents_stream \
  --from-beginning

  pe http://localhost:8081 putem vedea iar mesajele din kafka
