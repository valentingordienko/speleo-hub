import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChatSolid.svg';

export function ChatSolid(props: TProps) {
  return (
    <Icon {...props} name="ChatSolid">
      <SVG />
    </Icon>
  );
}
