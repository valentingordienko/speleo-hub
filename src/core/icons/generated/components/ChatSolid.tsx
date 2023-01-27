import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChatSolid.svg';

export function ChatSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ChatSolid">
      <SVG />
    </Icon>
  );
}
