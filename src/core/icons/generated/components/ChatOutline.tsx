import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChatOutline.svg';

export function ChatOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ChatOutline">
      <SVG />
    </Icon>
  );
}
