export default function formatTime(count: number) {
  if (count < 0) {
    return '00:00';
  }
  function fill(num: number) {
    return `0${num}`.slice(-2);
  }
  const m = Math.floor(count / 1000 / 60);
  const s = Math.floor(count / 1000) % 60;
  return `${fill(m)}:${fill(s)}`;
}

export function formatTimeSecond(count: number) {
  if (count < 0) {
    return '00';
  }

  function fill(num: number) {
    if (num < 100) {
      return `0${num}`.slice(-2);
    }

    return num;
  }

  const s = Math.floor(count / 1000);
  return `${fill(s)}`;
}

// 时间戳转时间格式
export function formatTimeHour(count: number) {
  if (count < 0) {
    return '00:00:00';
  }
  function fill(num: number) {
    return `0${num}`.slice(-2);
  }
  const hour = fill(Math.floor(count / 1000 / 60 / 60));
  const min = fill(Math.floor((count / 1000 / 60) % 60));
  const sec = fill(Math.floor(count / 1000) % 60);
  return `${hour}:${min}:${sec}`;
}

export function formatTimeNormal(count: number) {
  if (count < 0) {
    return '0';
  }

  const s = Math.floor(count / 1000);
  return `${s}`;
}

export function formatDayTimeHour(count: number, type: string = 'ayu') {
  if (count < 0) {
    return '00 00:00:00';
  }

  function fill(num: number) {
    return `0${num}`.slice(-2);
  }

  const day = fill(Math.floor(count / 1000 / 60 / 60 / 24));
  const hour = fill(Math.floor(count / 1000 / 60 / 60 % 24));
  const min = fill(Math.floor((count / 1000 / 60) % 60));
  const sec = fill(Math.floor(count / 1000) % 60);

  return type === 'ayu' ? {
    sec,
    min,
    hour,
    day
  } : {
    day,
    hour,
    min,
    sec
  };
}
