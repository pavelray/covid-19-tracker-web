import React from 'react';
import CountUp from 'react-countup';

export default function Cards({color,category,count,ratePercentage}) {
  return (
    <div className={`ui raised card`}>
            <div className="content">
                <div className="description" style={{height: '80px'}}>
                    <div className="ui horizontal statistic">
                        <div className="value"><CountUp end={count} separator =","/></div>
                        <div className="label">{category}</div>
                    </div>
                </div>
            </div>
            <div className="extra content" style={{backgroundColor: `${color}`, height: '40px'}}>
                <span className="right floated" style={{color: 'white'}}>
                    {ratePercentage}
                </span>
            </div>
    </div>
  )
}
