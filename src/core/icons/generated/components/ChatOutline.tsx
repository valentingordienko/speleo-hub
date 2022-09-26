import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChatOutline.svg';

export function ChatOutline(props: TProps) {
  return (
    <Icon {...props} name="ChatOutline">
      <SVG />
    </Icon>
  );
}
