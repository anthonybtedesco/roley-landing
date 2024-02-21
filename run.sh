if [ ! -f cloud-sql-proxy ]; then
    curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.8.1/cloud-sql-proxy.linux.amd64
    chmod +x cloud-sql-proxy
fi

# Function to start cloud-sql-proxy
start_cloud_sql_proxy() {
    ./cloud-sql-proxy roley-cloud:us-central1:roley-postgres --credentials-file=roley-cloud-service-account.key >> cloud-sql-proxy.log 2>&1 &
    sleep 5
    check_cloud_sql_proxy
}

# Function to stop cloud-sql-proxy
stop_cloud_sql_proxy() {
    pkill "cloud-sql-proxy"
    sleep 2
    check_cloud_sql_proxy
}

# Main loop

echo "Starting cloud-sql-proxy"
start_cloud_sql_proxy


npm run start