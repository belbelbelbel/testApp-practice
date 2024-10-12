import React from 'react';
import { View, Text } from 'react-native';

export default function Activity() {
  const ActivityArray = [
    {
      title: 'Order 1',
      date: 'Today, 12:30 PM',
      status: 'Completed',
    },
    {
      title: 'Order 2',
      date: 'Yesterday, 10:45 AM',
      status: 'Pending',
    },
    {
      title: 'Order 3',
      date: 'Today, 9:30 AM',
      status: 'Canceled',
    },
    {
      title: 'Order 4',
      date: 'Today, 7:15 PM',
      status: 'Shipped',
    },
  ];

  return (
    <View style={{ flex: 1, marginTop: 25 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, textAlign:"center" }}>Activity Screen</Text>
      <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: 15, marginTop: 15 }}>Recent Activity</Text>
      <View style={{ width: '100%', padding: 10 }}>
        {ActivityArray.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              borderRadius: 8,
              width: "100%",
              height: 80,
              marginBottom: 25, 
            }}
          >
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
            <Text style={{ fontSize: 14 }}>{item.date}</Text>
            <Text
              style={{
                fontSize: 14,
                color: item.status === 'Completed' ? 'green' : item.status === 'Canceled' ? 'red' : 'blue',
              }}
            >
              {item.status}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
